import { Component } from '@angular/core';
import { iPost } from 'src/app/models/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
    postsArr: iPost[] = [];

    constructor(private PostSvc: PostsService) {}

    async ngOnInit() {
        this.postsArr = await this.PostSvc.getActivePosts();
        console.log('PizzeSvc', this.PostSvc);
        console.log(this.postsArr);
    }
}
