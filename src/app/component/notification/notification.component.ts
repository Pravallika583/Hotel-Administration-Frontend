import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/service/notification.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnDestroy {
  message: string = '';
  private subscription: Subscription;

  constructor(private notificationService: NotificationService) {
    this.subscription = this.notificationService.notification$.subscribe(message => {
      this.message = message;
      // Automatically clear the message after a certain time
      setTimeout(() => this.message = '', 3000);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
