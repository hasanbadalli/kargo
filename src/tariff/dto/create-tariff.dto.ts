import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateTariffDto {
    @ApiProperty()
    @IsString()
    country: string;

    @ApiProperty()
    @IsNumber()
    weightMin: number;

    @ApiProperty()
    @IsNumber()
    weightMax: number;

    @ApiProperty()
    @IsNumber()
    priceLocal: number;

    @ApiProperty({ required: false })
    @IsNumber()
    priceManat?: number;
}
