// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    string: "",
    integer: 0,
    array: [],
    object: {},
    boolean: false
  }),
})
