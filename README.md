# MapReduce

## Algorithm

Single main process refered to as a master process that will split several operation across different minion processes. Types of work that can be done in one of the minion are map or reduce. The Map takes one shape of data and turns it into another type of data. The Reduce is an accumulator that takes a number of sources and returns a single source. The Main process splits the payload based on its size and the number of available minion processes. Each batch is queued an then mapped in a minion process. The algorithm waits for all maps to finish, then sorts the total results based on some given logic. The main process then again queues each sorted batch to be reduced. Finally, the main process concatenates the results of each reduce.


## Domain
