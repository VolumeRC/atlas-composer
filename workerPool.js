class WorkerPool {

  constructor(maxConcurrency, workerPath) {
    this._workers = []; // Queue with all the workers
    this._tasks = []; //Queue with all the pending jobs

    this._workerPath = workerPath;
    this._maxWorkers = maxConcurrency; //Max number of parallel execution tasks

    //Initialize the workers
    this.init();
  }

  //Create intial workers
  init() {
    for (let i = 0; i < this._maxWorkers.length; i++) {
      this._workers.push(new Worker(this._workerPath));
    }
  }

  //Remove all workers from the pool
  end() {
    while(this._workers.length > 0) {
      let w = this._workers.pop();
      w.terminate();
      w = undefined;
    }
    this._tasks = [];
  }

  run() {
    //TODO
  }

}
