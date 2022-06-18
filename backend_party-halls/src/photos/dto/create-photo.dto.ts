import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreatePhotoDto {

    url: string;

    @MaxLength(80, {
        message: 'A description deve ter no máximo 80 caracteres',
    })
    description: string;

    @IsNotEmpty({
        message: 'Informe se o espaço é Interno ou Externo',
    })
    typeSpace: string;
}
