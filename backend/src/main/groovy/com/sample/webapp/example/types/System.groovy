package com.sample.webapp.example.types;


class System {
  String id
  def name

  Owner owner
  List<ContentHub> hubs

  System(id, name) {

        this.id = id
        this.name = name


  }
}