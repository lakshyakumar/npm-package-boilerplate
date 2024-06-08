import { helloWorld } from "../src";

describe('helloWorld Function', () => {
    it('should return "Hello World!"', () => {
        const result = helloWorld();
        expect(result).toBe('Hello World!');
    });
});