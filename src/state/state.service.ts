import { Injectable } from '@nestjs/common';
import { State } from './entities/state.entity';

@Injectable()
export class StateService {
  private states: State[] = [];

  findAll(): State[] {
    return this.states;
  }

  findOne(id: number): State {
    return this.states.find((state) => state.id === id);
  }

  create(state: State) {
    this.states.push(state);
  }

  update(id: number, state: State) {
    const index = this.states.findIndex((s) => s.id === id);
    if (index !== -1) {
      this.states[index] = state;
    }
  }

  remove(id: number) {
    this.states = this.states.filter((state) => state.id !== id);
  }
}
