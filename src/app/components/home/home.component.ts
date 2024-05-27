import { Component } from '@angular/core';
import { iPost } from 'src/app/models/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    post!: iPost;
    postsArr: iPost[] = [];
    related: iPost[] = [];

    constructor(private PostSvc: PostsService) {}

    async ngOnInit() {
        this.post = await this.PostSvc.getTopPosts();
        this.related = await this.PostSvc.getRelatedPosts(4);
    }
}
