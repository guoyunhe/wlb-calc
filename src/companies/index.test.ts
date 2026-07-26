import { COMPANIES } from '.';

describe('COMPANIES', () => {
  it('should have unique ids', () => {
    // count id duplicates
    const idCounts: Record<string, number> = {};
    for (const company of COMPANIES) {
      if (idCounts[company.id]) {
        idCounts[company.id]++;
      } else {
        idCounts[company.id] = 1;
      }
    }

    // find duplicates
    const duplicates = Object.entries(idCounts).filter(([_, count]) => count > 1);
    expect(duplicates).toEqual([]);
  });
});
