import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

const styles = {
  drawerContainer: {
    height: '270px',
    transform: 'translate3d(0,0,0)',
  },
  drawerContent: {
    padding: '1em',
  },
};

@Component({
  selector: 'root-app',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerDemo01Component {
  classes = this._theme.addStyleSheet(styles);
  mode = 'side';
  hasBackdrop: boolean | null = null;

  constructor(private _theme: LyTheme2) {}
}
