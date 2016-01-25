describe('Contact', function() {
  it("Creates a new contact with given properties", function() {
    var testContact = new Contact("John","Doe");
    expect(testContact.firstName).to.equal("John");
    expect(testContact.lastName).to.equal("Doe");
    expect(testContact.addresses).to.eql([]);
  });
});
