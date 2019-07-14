import { Component, OnInit, Input, Optional } from '@angular/core';
import { TabbedPaneComponent } from './tabbed-pane.component';
import { getDef, getDefs, ComponentDeps } from '../util';
import { NgIf, NgForOf } from '@angular/common';
import { COMMON_DIRECTIVES } from '../common';

@Component({
    selector: 'tab',
    template: `
        <div *ngIf="visible">
            <h2>{{title}}</h2>
            <ng-content></ng-content>
        </div>
    `
})
@ComponentDeps([
    ...COMMON_DIRECTIVES
])
export class TabComponent implements OnInit {
    public visible: boolean = false;
    @Input() public title: string;

    constructor(@Optional() public tabs: TabbedPaneComponent) {
    }

    ngOnInit() {
        if (this.tabs) {
            this.tabs.register(this);
        }
    }
}

// const def = getDef(TabComponent);

// def.directiveDefs = [
//     ...getDefs(COMMON_DIRECTIVES)
// ];
