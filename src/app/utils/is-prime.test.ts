import { isPrime } from "./primes";


describe('isPrime Tests',()=>{
    
    it('should return true for 2',()=>{
        expect(isPrime(2)).toBe(true);
    });

    it('should throw for non numberic parameter',()=>{
        expect(isPrime('hello')).toThrow('invalid range');
    });
});