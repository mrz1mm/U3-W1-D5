import { Component } from '@angular/core';
import { iPost } from 'src/app/models/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
    postsArr: iPost[] = [];

    constructor(private PostSvc: PostsService) {}

    async ngOnInit() {
        this.postsArr = await this.PostSvc.getInactivePosts();
        console.log('PizzeSvc', this.PostSvc);
        console.log(this.postsArr);
    }
}
