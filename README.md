- whenever we want to make a call to a function from another component it is better to use Service rather than manual html calls
- Here sorting-call.service is configured to make calls to sorting function present in table-child component from button clicks present in btn-child component.
- Service includes EventEmitter and subscribe methods that coordinates with each other in case of events emitted by some sort triggers like button clicks.

- sorting-call.service contains two event emitters which are subscribed by two subscription variables that will execute respective sorting functions whenever the emitter notifies about button click event.

- SortByNameSubsVar, SortByAgeSubsVar subscription variables present in sorting-call.service can also be declared in table-child component and will work the same as now