import {Component} from 'angular2/core';
@Component({
    selector:'my-app',
    template:`<h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>编号: </label>{{hero.id}}</div>
    <div>
        <label>姓名: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
    </div>`
})
export class AppComponent{
    public title='英雄之旅';
    public hero:Hero={
        id:1,
        name:"白不菜"
    };
}
export class Hero{
    id:number;
    name:string;
}