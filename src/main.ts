import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 3000;

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  try {
    app.listen(PORT, () => {
      console.log(`Server listening on PORT ${PORT}`);
    });
  } catch (error) {
    console.error("Error conecting with DB :", error);
    process.exit(1);
  }
}
bootstrap();
