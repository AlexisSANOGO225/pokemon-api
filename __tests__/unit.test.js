const { getPokemonName } = require("../server");

test("getPokemonName returns correct pokemon", () => {
    expect(getPokemonName(0)).toBe("Pikachu");
});

test("getPokemonName returns null for invalid id", () => {
    expect(getPokemonName(99)).toBeNull();
});