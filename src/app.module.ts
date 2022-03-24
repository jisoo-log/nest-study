import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], // 보통 모듈은 import 에 넣고, 여기에 기본 홈페이지 내용을 넣는다
  providers: [],
})
export class AppModule {}
