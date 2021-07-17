## 現象概要

### Before
![delphi1.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/3a6912ab-dcca-a08d-b606-cf00d1745267.gif)


### After

![delphi3.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/deedcbb8-1e46-1ac4-6aa7-656d81faae89.gif)


## 対策

以下、いずれかがあります。

### DoubleBuffered := True;

``` 
Form1.DoubleBuffered:=True;
```


### WMEraseBkgnd, WMPaint

```pascal
type
  TForm1 = class(TForm)
  private
    procedure WMEraseBkgnd(var Message: TWMEraseBkgnd);
                               message WM_ERASEBKGND;
    procedure WMPaint(var Message: TWMPaint);
                               message WM_PAINT;
  end;

procedure TForm1.WMEraseBkgnd(var Message: TWMEraseBkgnd);
begin
// do nothing
end;

procedure TForm1.WMPaint(var Message: TWMPaint);
var
  PS: TPaintStruct;
  w, h: Integer;
  DC: HDC;
  bmp, bmpOld: HBITMAP;
  i, Count, SaveDCIndex: Integer;
begin
  if Message.DC <> 0 then
    inherited
  else
  begin
    BeginPaint(Handle, PS);
    try
      w := PS.rcPaint.Right - PS.rcPaint.Left;
      h := PS.rcPaint.Bottom - PS.rcPaint.Top;
      DC := GetDC(HWND(0));
      bmp := CreateCompatibleBitmap(DC, w, h);
      ReleaseDC(HWND(0), DC);
      try
        Message.DC := CreateCompatibleDC(HDC(0));
        with PS do
        try
          bmpOld := SelectObject(Message.DC, bmp);

          with rcPaint do
            SetWindowOrgEx(Message.DC, Left, Top, nil);
          FillRect(Message.DC, rcPaint, Brush.Handle);

          Count := ControlCount;
          for i := 0 to Count - 1 do
          begin
            if Controls[i] is TWinControl then break;
            with Controls[i] do
            begin
              if Visible and RectVisible(hdc, BoundsRect) then
              begin
                SaveDCIndex := SaveDC(Message.DC);
                OffsetWindowOrgEx(Message.DC, -Left, -Top, 
PPoint(0)^);
                IntersectClipRect(Message.DC, 0, 0, Width, Height);
                Perform(WM_PAINT, Message.DC, 0);
                RestoreDC(Message.DC, SaveDCIndex);
              end;
            end;
          end;

          BitBlt(hdc, rcPaint.Left, rcPaint.Top, w, h,
              Message.DC, rcPaint.Left, rcPaint.Top, SRCCOPY);

          SelectObject(Message.DC, bmpOld);
        finally
          DeleteDC(Message.DC);
          Message.DC := 0;
        end;
      finally
        DeleteObject(bmp);
      end;
    finally
      EndPaint(Handle, PS);
    end;
  end;
end;

```


## 参考にしたサイト

https://e-words.jp/w/%E3%83%80%E3%83%96%E3%83%AB%E3%83%90%E3%83%83%E3%83%95%E3%82%A1%E3%83%AA%E3%83%B3%E3%82%B0.html

https://www.petitmonte.com/bbs/answers?question_id=2685

DoubleBuffered によりメモリ使用量は増えるという話。

http://delfusa.main.jp/delfusafloor/archive/www.nifty.ne.jp_forum_fdelphi/samples/00932.html

以上です。
