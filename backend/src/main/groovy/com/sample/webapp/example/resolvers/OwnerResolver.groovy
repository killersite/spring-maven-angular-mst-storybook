package com.sample.webapp.example.resolvers

import com.coxautodev.graphql.tools.GraphQLResolver
import com.sample.webapp.example.types.Owner
import org.springframework.stereotype.Component

/**
 * Created by bschoche on 3/9/17.
 */
@Component
class OwnerResolver implements GraphQLResolver<Owner> {
}
