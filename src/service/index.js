/* eslint-disable */
import { fetch, synfetch } from '@/axios'

/* */
export const getData = () => fetch('/getData', {})

/* */
export const getSynData = () => synfetch('/getData', {})

/* */
export const getSynError = () => synfetch('/getError', {})
