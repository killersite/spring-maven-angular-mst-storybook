package com.sample.webapp.example.resolvers

import com.coxautodev.graphql.tools.GraphQLResolver
import com.sample.webapp.example.types.System
import org.springframework.stereotype.Component

/**
 * Created by bschoche on 3/9/17.
 */
@Component
class SystemResolver implements GraphQLResolver<System> {
}
