# ringRing

A client-side prototype for call effects and ring tones

## use case examples
* user on client recieves request to communicate with another client
* user recieves a notification
* user recieves a message

## features
choose an animation and sound effect for messages, notifications and calls.

## current api
1. Create a new instance of RingCircle
2. insert the container you'd like to append too inside the`RingCircle()` parameter
3. Call method on that instance for desired effects

```
var instance = new RingCircle(divContainer);
instance.ring();
```

## future api
```
var instance = new RingRing(container);
instance.ring("effectName").sound("soundName").duration(2);
```


### Contributors
* Christopher P.K Morris
* Yurij Mikhalevich
