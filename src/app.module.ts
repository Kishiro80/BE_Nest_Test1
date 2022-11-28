import { CommentsModule } from './comments/comments.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comments } from './entities/comments.entity';
import { Posts } from './entities/posts.entity';
 
@Module({
  imports: [
    CommentsModule,
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Comments, Posts],
      synchronize: process.env.DB_SYNC == 'true' ? true : false,
    }),
    PostsModule,
    CommentsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
