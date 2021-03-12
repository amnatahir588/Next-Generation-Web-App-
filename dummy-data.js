exports.accounts = [{
	id: 0,
	username: "Alice",
	password: "abc123"
}, {
	id: 1,
	username: "Bob",
	password: "abc123",
}, {
	id: 2,
	username: "Claire",
	password: "abc123"
}]


exports.playlists = [{
	id: 0,
	accountId: 0,
	title: "Alice's Favorites",
	isPublic: true
}, {
	id: 1,
	accountId: 0,
	title: "Dancing Music",
	isPublic: false
}, {
	id: 2,
	accountId: 0,
	title: "Christmas songs",
	isPublic: true
}, {
	id: 3,
	accountId: 1,
	title: "Bob's playlist",
	isPublic: false
}]

exports.songs = [{
	id: 0,
	playlistId: 0,
	title: "Song 1"
}, {
	id: 1,
	playlistId: 0,
	title: "Song 2"
}, {
	id: 2,
	playlistId: 1,
	title: "Song 3"
}, {
	id: 3,
	playlistId: 1,
	title: "Song 4"
}, {
	id: 4,
	playlistId: 1,
	title: "Song 5"
}, {
	id: 5,
	playlistId: 2,
	title: "Song 6"
}, {
	id: 6,
	playlistId: 2,
	title: "Song 7"
}, {
	id: 7,
	playlistId: 2,
	title: "Song 8"
}, {
	id: 8,
	playlistId: 2,
	title: "Song 9"
}]
const data = require('./dummy-data')

// Retrieve all accounts.
const accounts = data.accounts

// Retrieve the account with id 2.
const account = data.accounts.find(a => a.id == 2)

// Retrieve all playlists.
const playlists = data.playlists

// Retrieve the playlist with id 2.
const playlist = data.playlists.find(p => p.id == 2)

// Retrieve all playlists belonging to the account with id 0.
const playlist2 = data.playlists.filter(p => p.accountId == 0)

// Retrieve all songs belonging to the playlist with id 1.
const songs = data.songs.filter(s => s.playlistId == 1) 