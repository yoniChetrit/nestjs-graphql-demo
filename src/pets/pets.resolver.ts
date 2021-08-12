import { Int } from '@nestjs/graphql';
import { CreatePetInput } from './dto/create-pet.input';
import { PetsService } from './pets.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Pet } from './pet.entity';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petsService: PetsService) { }

    // @Query(returns => [Pet])
    // pets() {
    //     // return this.petsService.findAll()
    // }

    // @Query(returns => Pet)
    // getPet(@Args('id', { type: () => Int }) id: number) {
    //     // return this.petsService.findOne(id);
    // }


    // @Mutation(returns => Pet)
    // createPet(@Args('createInput') createInput: CreatePetInput) {
    //     // return this.petsService.createPet(createInput);
    // }
}
