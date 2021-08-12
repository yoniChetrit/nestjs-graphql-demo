import { CreatePetInput } from './dto/create-pet.input';
import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
    constructor() { }

    // createPet(createPetInput: CreatePetInput) {
    //     // const newPet = this.petsRepository.create(createPetInput); // newPet = new Pet(); new.name = 

    //     // return this.petsRepository.save(newPet); // insert

    // }
    // async findAll() {
    //     // return this.petsRepository.find(); // SELECT *
    // }

    // async findOne(id: number) {
    //     // return this.petsRepository.findOneOrFail(id);
    // }
}
