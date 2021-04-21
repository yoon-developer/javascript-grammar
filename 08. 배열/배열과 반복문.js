function get_members() {
    return ['member01', 'member02', 'member03'];
}

var members = get_members();

for(i = 0; i < members.length; i++) {
    console.log(members[i].toUpperCase());
}