package com.sample.webapp.example.types;


class Owner {
  String id
  def name
  def city
  def state

  List<System> systems;

  Owner(id, name, city, state){
    this.id = id
    this.name = name
    this.city = city
    this.state = state

  }

public addSystems(System... systems) {
    this.systems = Arrays.asList(systems);
  }

}