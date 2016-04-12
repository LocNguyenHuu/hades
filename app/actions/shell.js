import fs from 'fs'
import ConfigFile from '../lib/ConfigFile';

export const LOAD = 'shell/LOAD'
export const SYNC_FROM_LOCAL = 'shell/SYNC_FROM_LOCAL'
export const ADD = 'shell/ADD'
export const SAVE = 'shell/SAVE'
export const REMOVE = 'shell/REMOVE'
export const SHOW_ADD_FORM = 'shell/ADD/form/SHOW'
export const HIDE_ADD_FORM = 'shell/ADD/form/HIDE'
export const SHOW_EDIT_FORM = 'shell/EDIT/form/SHOW'
export const HIDE_EDIT_FORM = 'shell/EDIT/form/HIDE'

export function load(id) {
  return {
    type: LOAD
  }
}

export function add(data) {
  return {
    type: ADD,
    payload: data
  }
}

export function syncFromLocal() {
  const configFile = ConfigFile()
  const localConfigItems = configFile.loadFromLocal()

  return {
    type: SYNC_FROM_LOCAL,
    payload: localConfigItems
  }
}

export function save(data) {
  return {
    type: SAVE,
    payload: data
  }
}

export function remove(id) {
  return {
    type: REMOVE
  }
}

export function showAddForm() {
  return {
    type: SHOW_ADD_FORM
  }
}

export function hideAddForm() {
  return {
    type: HIDE_ADD_FORM
  }
}

export function showEditForm(host) {
  return {
    type: SHOW_EDIT_FORM,
    payload: {
      host
    }
  }
}

export function hideEditForm() {
  return {
    type: HIDE_EDIT_FORM
  }
}
