import { reactive } from 'vue'

export const state = reactive({
  enemy: {
    hp: 10,
    lvl: 1,
    maxhp: 10,
    ex: 0,
    attack: 0,
  },
  player: {
    hp: 100,
    lvl: 1,
    maxhp: 100,
    ex: 0,
    attack: 5,
    lowk: 0,
    inte: 0,
    points: 10,
    yclun: "Уклонился",
  },
  equip:["","","","","",""],
  equip_V: {
    head:'',
    body:'',
    foot:'',
    armR:'',
    armL:'',
    pois:'',
  },
  log: ""
})