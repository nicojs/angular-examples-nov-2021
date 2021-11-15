

// Jasmine tests here

import { MidichlorianPipe } from "./midichlorian.pipe";

describe('midichlorian pipe', () => {

  let sut: MidichlorianPipe;

  beforeEach(() => {
    sut = new MidichlorianPipe();
  });

  it('should postfix with "midichlorians"', () => {
    const output = sut.transform(42);
    expect(output).toBe('42 midichlorians');
  });

  it('should postfix with "mc" when "short" formatting is requested', () => {
    const output = sut.transform(42, 'short');
    expect(output).toBe('42 mc');
  });
});
