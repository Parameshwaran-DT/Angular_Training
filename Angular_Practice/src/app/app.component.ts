import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string= 'Angular_Practice';
  // movies: Movie[] = [
  //   {
  //     title: 'Zootopia',
  //     director: 'Byron Howard, Rich Moore',
  //     cast: 'Idris Elba, Ginnifer Goodwin, Jason Bateman',
  //     releaseDate: 'March 4, 2016',
  //   },
  //   {
  //     title: 'Batman v Superman: Dawn of Justice',
  //     director: 'Zack Snyder',
  //     cast: 'Ben Affleck, Henry Cavill, Amy Adams',
  //     releaseDate: 'March 25, 2016',
  //   },
  //   {
  //     title: 'Captain American: Civil War',
  //     director: 'Anthony Russo, Joe Russo',
  //     cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans',
  //     releaseDate: 'May 6, 2016',
  //   },
  //   {
  //     title: 'X-Men: Apocalypse',
  //     director: 'Bryan Singer',
  //     cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac',
  //     releaseDate: 'May 27, 2016',
  //   },
  //   {
  //     title: 'Warcraft',
  //     director: 'Duncan Jones',
  //     cast: 'Travis Fimmel, Robert Kazinsky, Ben Foster',
  //     releaseDate: 'June 10, 2016',
  //   },
  // ];

  num:string='';

  movies:movieType[]=[];
  mTitle:string="";
  mDirector:string="";

  IfTitle:string='ngIf Example';
  showMe:boolean | undefined;

  color: string= 'red';
  status:string='error';

  ngTryTitle:string='ngTry Example';

  ngOnInit() {
    this.Refresh();
  }
  remove(i: number) {
    this.movies.splice(i,1);
  }

  addMovie() {
    this.movies.push({ title: this.mTitle, director: this.mDirector})
    this.mTitle=""
    this.mDirector=""
  }

  Refresh() {
    console.log("refresh")
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore'},
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder'},
      { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo'},
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer'},
      { title: 'Warcraft', director: 'Duncan Jones'},
    ]
  }


  trackByFn(index: any, item: { title: any; }) {
    return item.title;
  }
 
  

}
interface movieType {
  title:string,
  director:string
}