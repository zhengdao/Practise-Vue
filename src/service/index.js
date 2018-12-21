/* eslint-disable */
import { fetch, synfetch } from '@/net'

/* */
export const getData = () => fetch('/getData', {})

/* */
export const getError = () => fetch('/getError', {})

/* */
export const getSynData = () => synfetch('/getData', {})
