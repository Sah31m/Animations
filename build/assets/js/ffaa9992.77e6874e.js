"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[292],{44097:a=>{a.exports=JSON.parse('{"functions":[{"name":"Init","desc":"Initializes `AnimationsClient`. Yields if [`AnimationsClient.AutoLoadTracks`](#AutoLoadTracks) is set to true and the player\'s character already exists.\\n\\n:::info\\nShould be called once before any other method.\\n:::","params":[{"name":"initOptions","desc":"","lua_type":"initOptions?"}],"returns":[],"function_type":"method","yields":true,"source":{"line":90,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"AwaitLoaded","desc":"Yields until the client animation tracks have loaded.","params":[],"returns":[],"function_type":"method","yields":true,"source":{"line":153,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"AwaitRigLoaded","desc":"Yields until the rig animation tracks have loaded.","params":[{"name":"rig","desc":"","lua_type":"Model"}],"returns":[],"function_type":"method","yields":true,"source":{"line":161,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"AreTracksLoaded","desc":"Returns if the client has had its animation tracks loaded.","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":169,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"AreRigTracksLoaded","desc":"Returns if the rig has had its animation tracks loaded.","params":[{"name":"rig","desc":"","lua_type":"Model"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":177,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"LoadTracks","desc":"Yields while client animation tracks load.","params":[],"returns":[],"function_type":"method","yields":true,"source":{"line":185,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"LoadRigTracks","desc":"Yields while the rig animation tracks load.","params":[{"name":"rig","desc":"","lua_type":"Model"},{"name":"rigType","desc":"","lua_type":"string"}],"returns":[],"function_type":"method","yields":true,"source":{"line":194,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"GetTrack","desc":"Returns a client animation track or nil.","params":[{"name":"path","desc":"","lua_type":"path"}],"returns":[{"desc":"","lua_type":"AnimationTrack?"}],"function_type":"method","source":{"line":203,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"GetRigTrack","desc":"Returns a rig animation track or nil.","params":[{"name":"rig","desc":"","lua_type":"Model"},{"name":"path","desc":"","lua_type":"path"}],"returns":[{"desc":"","lua_type":"AnimationTrack?"}],"function_type":"method","source":{"line":212,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"PlayTrack","desc":"Returns a playing client animation track.","params":[{"name":"path","desc":"","lua_type":"path"},{"name":"fadeTime","desc":"","lua_type":"number?"},{"name":"weight","desc":"","lua_type":"number?"},{"name":"speed","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"AnimationTrack"}],"function_type":"method","source":{"line":224,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"PlayRigTrack","desc":"Returns a playing rig animation track.","params":[{"name":"rig","desc":"","lua_type":"Model"},{"name":"path","desc":"","lua_type":"path"},{"name":"fadeTime","desc":"","lua_type":"number?"},{"name":"weight","desc":"","lua_type":"number?"},{"name":"speed","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"AnimationTrack"}],"function_type":"method","source":{"line":236,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"StopTrack","desc":"Returns a stopped client animation track.","params":[{"name":"path","desc":"","lua_type":"path"},{"name":"fadeTime","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"AnimationTrack"}],"function_type":"method","source":{"line":246,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"StopRigTrack","desc":"Returns a stopped rig animation track.","params":[{"name":"rig","desc":"","lua_type":"Model"},{"name":"path","desc":"","lua_type":"path"},{"name":"fadeTime","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"AnimationTrack"}],"function_type":"method","source":{"line":256,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"GetTrackFromAlias","desc":"Returns a client animation track or nil.","params":[{"name":"alias","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"AnimationTrack?"}],"function_type":"method","source":{"line":265,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"GetRigTrackFromAlias","desc":"Returns a rig animation track or nil.","params":[{"name":"rig","desc":"","lua_type":"Model"},{"name":"alias","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"AnimationTrack?"}],"function_type":"method","source":{"line":274,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"PlayTrackFromAlias","desc":"Returns a playing client animation track.","params":[{"name":"alias","desc":"","lua_type":"any"},{"name":"fadeTime","desc":"","lua_type":"number?"},{"name":"weight","desc":"","lua_type":"number?"},{"name":"speed","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"AnimationTrack"}],"function_type":"method","source":{"line":286,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"PlayRigTrackFromAlias","desc":"Returns a playing rig animation track.","params":[{"name":"rig","desc":"","lua_type":"Model"},{"name":"alias","desc":"","lua_type":"any"},{"name":"fadeTime","desc":"","lua_type":"number?"},{"name":"weight","desc":"","lua_type":"number?"},{"name":"speed","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"AnimationTrack"}],"function_type":"method","source":{"line":298,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"StopTrackFromAlias","desc":"Returns a stopped client animation track.","params":[{"name":"alias","desc":"","lua_type":"any"},{"name":"fadeTime","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"AnimationTrack"}],"function_type":"method","source":{"line":308,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"StopRigTrackFromAlias","desc":"Returns a stopped rig animation track.","params":[{"name":"rig","desc":"","lua_type":"Model"},{"name":"alias","desc":"","lua_type":"any"},{"name":"fadeTime","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"AnimationTrack"}],"function_type":"method","source":{"line":318,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"SetTrackAlias","desc":"Sets an alias to be the equivalent of the given path for a client animation track.","params":[{"name":"alias","desc":"","lua_type":"any"},{"name":"path","desc":"","lua_type":"path"}],"returns":[],"function_type":"method","source":{"line":327,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"SetRigTrackAlias","desc":"Sets an alias to be the equivalent of the given path for a rig animation track.","params":[{"name":"rig","desc":"","lua_type":"Model"},{"name":"alias","desc":"","lua_type":"any"},{"name":"path","desc":"","lua_type":"path"}],"returns":[],"function_type":"method","source":{"line":336,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"RemoveTrackAlias","desc":"Removes the alias for a client animation track.","params":[{"name":"alias","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":344,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"RemoveRigTrackAlias","desc":"Removes the alias for a rig animation track.","params":[{"name":"rig","desc":"","lua_type":"Model"},{"name":"alias","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":352,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}}],"properties":[{"name":"AutoLoadPlayerTracks","desc":"If set to true, client animation tracks will be loaded each time the client spawns.\\n\\n:::warning\\nMust have animation ids under [`rigType`](/api/AnimationIds#rigType) of **\\"Player\\"** in the [`AnimationIds`](/api/AnimationIds) module.\\n:::","lua_type":"false","source":{"line":66,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"TimeToLoadPrints","desc":"If set to true, prints will be made on each call to [`AnimationsClient:LoadTracks()`](#LoadTracks) to indicate the start, stop and elapsed time of pre-loading the client animation tracks.\\n\\n:::caution\\nIt is suggested to keep this as true because a lot of client animation tracks results in a significant yield time which is difficult to debug if forgotten.\\n:::","lua_type":"true","source":{"line":78,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}}],"types":[{"name":"initOptions","desc":"Gets applied to [`Properties`](#properties).","fields":[{"name":"AutoLoadPlayerTracks","lua_type":"boolean","desc":"Defaults to false"},{"name":"TimeToLoadPrints","lua_type":"boolean","desc":"Defaults to true (on the client)"}],"source":{"line":18,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}},{"name":"path","desc":"```lua\\nlocal Animations = require(game.ReplicatedStorage.Animations.Package.AnimationsClient)\\n\\n\\n-- These are all valid options for retrieving an animation track\\nlocal animationPath = \\"Jump\\" -- A single key (any type)\\n\\nlocal animationPath = {\\"Dodge\\", Vector3.xAxis} -- An array path (values of any type)\\n\\nlocal animationPath = \\"Climb.Right\\" -- A path seperated by \\".\\" (string)\\n\\n\\nlocal animationTrack = Animations:GetTrack(animationPath)\\n```","lua_type":"any","source":{"line":39,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}}],"name":"AnimationsClient","desc":":::note\\nRoblox model path: `Animations.Package.AnimationsClient`\\n:::\\n\\n:::info\\nAny reference to \\"client animation tracks\\" is referring to animation ids found under [`rigType`](/api/AnimationIds#rigType) of **\\"Player\\"** in the [`AnimationIds`](/api/AnimationIds) module\\n:::","realm":["Client"],"source":{"line":54,"path":"src/ReplicatedStorage/Animations/Package/AnimationsClient.lua"}}')}}]);