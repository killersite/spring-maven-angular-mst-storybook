package com.sample.webapp.example.resolvers;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.sample.webapp.example.TestRepository;
import com.sample.webapp.example.types.Owner;
import com.sample.webapp.example.types.ContentHub;
import com.sample.webapp.example.types.System;
import com.sample.webapp.example.types.Unit;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Query implements GraphQLQueryResolver {


  @Autowired
  private TestRepository testRepository;

  public String hello() {
    return "World";
  }

  public Owner owner(String id) {
    return (Owner) testRepository.getOwners().values().stream()
        .filter(owner -> owner instanceof Owner && owner.getId().equals(id)).findFirst().orElseGet(null);
  }

  public System system(String id) {
    return (System) testRepository.getSystems().values().stream()
        .filter(system -> system instanceof System && system.getId().equals(id)).findFirst().orElseGet(null);
  }
  
  public ContentHub contenthub(String id) {
    return new ContentHub();
  }

  public Unit unit(String id) {
    return new Unit();
  }

}
