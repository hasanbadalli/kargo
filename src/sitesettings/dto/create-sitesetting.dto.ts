import { Type } from 'class-transformer';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateSitesettingDto {
  @Type()
  @IsString()
  @Length(3, 30)
  siteName: string;

  @Type()
  @IsString()
  @Length(3, 30)
  logoUrl: string;

  @Type()
  @IsString()
  @Length(3, 30)
  aboutUs: string;

  @Type()
  @IsEmail()
  @Length(3, 30)
  contactEmail: string;

  @Type()
  @IsString()
  @Length(3, 30)
  contactPhone: string;
}
