import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-tabs',
  templateUrl: './dynamic-tabs.component.html',
  styleUrls: ['./dynamic-tabs.component.css'],
})

export class DynamicTabsComponent implements OnInit {
    tabs: any[] = [];
    activeTabIndex: number = 0;
    constructor() {}
    ngOnInit(): void {
      this.addTab();
    }
    addTab() {
      const newTabIndex = this.tabs.length + 1;
      this.tabs.push({
        title: 'Tab ' + newTabIndex,
        content: 'Contents of Tab ' + newTabIndex,
      });
      this.setActiveTab(this.tabs.length - 1);
    }
    setActiveTab(index: number) {
      this.activeTabIndex = index;
    }
    deleteTab() {
      this.tabs.pop();
      this.setActiveTab(this.tabs.length - 1);
    }

}

