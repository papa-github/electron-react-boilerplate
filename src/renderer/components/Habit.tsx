import React from 'react';

// A habit has a name, description, frequency (daily, weekly, monthly, yearly), current streak (days) and longest streak (days)
// Will add edit and delete buttons later

class Habit {
  private name: string;

  private description: string;

  private currentStreak: number;

  private longestStreak: number;

  constructor(
    name: string,
    description: string,
    currentStreak: number,
    longestStreak: number,
  ) {
    this.name = name;
    this.description = description;
    this.currentStreak = currentStreak;
    this.longestStreak = longestStreak;
  }

  public getName() {
    return this.name;
  }

  public getDescription() {
    return this.description;
  }

  public getCurrentStreak() {
    return this.currentStreak;
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
        <p>{this.currentStreak.toString()}</p>
        <p>{this.longestStreak.toString()}</p>
      </div>
    );
  }
}

export default Habit;
