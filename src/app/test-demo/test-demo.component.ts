import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-demo',
  templateUrl: './test-demo.component.html',
  styleUrls: ['./test-demo.component.css'],
  changeDetection :ChangeDetectionStrategy.OnPush
})
export class TestDemoComponent {
   @Input() Counter:any
}
