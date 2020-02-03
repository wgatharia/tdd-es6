import { calculateDegrees } from './clock'
import { expect } from 'chai'

describe('calculateDegrees - basic functionality tests', () =>{
    it('returns empty array when empty time is passed', () =>{
        let expected = {}
        let actual = calculateDegrees('')

        expect(expected).to.deep.equals(actual);
    })

    it('returns an array with 0 degrees when 00:00 is passed', () => {
        let expected = { hour: 0, min: 0}
        let actual = calculateDegrees('00:00')

        expect(expected).to.deep.equals(actual);
    })

    it('returns an array with 0 degrees when 12:00 is passed', () => {
        let expected = { hour: 0, min: 0 }
        let actual = calculateDegrees('12:00')

        expect(expected).to.deep.equals(actual);
    })

    it('returns an array with 180 and 0 degrees when 12:30 is passed', () => {
        let expected = {hour: 15,  min: 180}
        let actual = calculateDegrees('12:30')

        expect(expected).to.deep.equals(actual);
    })

    it('returns an array with 195 and 180 degrees when 06:30 is passed', () => {
        let expected = { hour: 195, min: 180}
        let actual = calculateDegrees('06:30')

        expect(expected).to.deep.equals(actual);
    })


    it('returns an array with 162 and 144 degrees when 06:30 is passed', () => {
        let expected = { hour: 162, min: 144}
        let actual = calculateDegrees('05:24')

        expect(expected).to.deep.equals(actual);
    })
})
