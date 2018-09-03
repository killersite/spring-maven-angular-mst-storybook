package com.sample.webapp.example;

import com.sample.webapp.example.types.Owner;
import com.sample.webapp.example.types.System;
import com.sample.webapp.example.types.ContentHub;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import com.github.javafaker.Faker;

@Component
public class TestRepository {

  private Map<String, Owner> owners;
  private Map<String, System> systems;

  public TestRepository() {
    Faker faker = new Faker();

    Owner testOwner1 = new Owner("1", faker.name().title(), faker.address().city(), faker.address().state());
    Owner testOwner2 = new Owner("2", faker.name().title(), faker.address().city(), faker.address().state());

    System testSystem1 = new System("1", faker.name().title());
    System testSystem2 = new System("2", faker.name().title());

    ContentHub testContentHub1 = new ContentHub();
    ContentHub testContentHub2 = new ContentHub();

    testOwner1.addSystems(testSystem1);
    testOwner2.addSystems(testSystem2);

    testSystem1.setOwner(testOwner1);
    testSystem2.setOwner(testOwner2);

    this.owners = Collections.unmodifiableMap(
        Stream.of(testOwner1, testOwner2).collect(Collectors.toMap(Owner::getId, Function.identity())));

    this.systems = Collections.unmodifiableMap(
        Stream.of(testSystem1, testSystem2).collect(Collectors.toMap(System::getId, Function.identity())));

  }

  public Map<String, Owner> getOwners() {
    return owners;
  }

  public Map<String, System> getSystems() {
    return systems;
  }

}
