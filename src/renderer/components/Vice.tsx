// src/components/Vice.js
import React from 'react';

// A vice has a name, a description, date of last indulgence, date of longest streak
// Will add edit and delete buttons later

class Vice {
  private name: string;

  private description: string;

  private lastIndulgence: Date;

  private longestStreak: number;

  constructor(
    name: string,
    description: string,
    lastIndulgence: Date,
    longestStreak: number,
  ) {
    this.name = name;
    this.description = description;
    this.lastIndulgence = lastIndulgence;
    this.longestStreak = longestStreak;
  }

  public getName() {
    return this.name;
  }

  public getDescription() {
    return this.description;
  }

  public getLastIndulgence() {
    return this.lastIndulgence;
  }

  public getLongestStreak() {
    return this.longestStreak;
  }

  // Will add setters later (see edit button)

  // TODO: Change last indulgence to display a running counter instead HH:MM:SS

  public render() {
    return (
      <div>
        <h3>{this.name}</h3>
        <p>{this.description}</p>
        <p>{this.lastIndulgence.toString()}</p>
        <p>{this.longestStreak.toString()}</p>
      </div>
    );
  }
}

export default Vice;
