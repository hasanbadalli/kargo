import { Module } from '@nestjs/common';
import { SitesettingsService } from './sitesettings.service';
import { SitesettingsController } from './sitesettings.controller';

@Module({
  controllers: [SitesettingsController],
  providers: [SitesettingsService],
})
export class SitesettingsModule {}
