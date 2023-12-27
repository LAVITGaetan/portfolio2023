import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HeroComponent } from './views/hero/hero.component';
import { SkillsComponent } from './views/skills/skills.component';
import { ToolsComponent } from './views/tools/tools.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { BlogComponent } from './views/blog/blog.component';
import { FooterComponent } from './views/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    SkillsComponent,
    ToolsComponent,
    ProjectsComponent,
    BlogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
