import { GetterTree } from 'vuex';

import { RootState } from '@/store';

import { Chocolate, Pagination } from '@/types';

import { ChocolateData as State } from '@/types'

export type Getters = {
    getPagination(state: State): Pagination;
    getChocolates(state: State): Chocolate;
}

export const getters: GetterTree<State, RootState> & Getters = {
    getPagination: (state) => state.pagination,
    getChocolates: (state) => state.data,
};
