const sayGreetings=(name)=>{
    return `hello ${name}`
}

test('should be hello yourname',()=>{

    const result=sayGreetings('ali')
    expect(result).toBe('hello ali')
})