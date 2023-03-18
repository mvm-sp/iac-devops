/home/mvm/.ansible/collections/ansible_collections/amazon
└── aws
    ├── CHANGELOG.rst
    ├── CONTRIBUTING.md
    ├── COPYING
    ├── FILES.json
    ├── MANIFEST.json
    ├── PSF-license.txt
    ├── README.md
    ├── bindep.txt
    ├── changelogs
    │   ├── changelog.yaml
    │   ├── config.yaml
    │   └── fragments
    ├── docs
    │   └── docsite
    │       ├── extra-docs.yml
    │       ├── links.yml
    │       └── rst
    │           ├── CHANGELOG.rst -> ../../../CHANGELOG.rst
    │           ├── aws_ec2_guide.rst
    │           ├── dev_guidelines.rst
    │           └── guide_aws.rst
    ├── meta
    │   └── runtime.yml
    ├── plugins
    │   ├── action
    │   │   └── s3_object.py
    │   ├── callback
    │   │   └── aws_resource_actions.py
    │   ├── doc_fragments
    │   │   ├── __pycache__
    │   │   │   ├── aws.cpython-310.pyc
    │   │   │   ├── boto3.cpython-310.pyc
    │   │   │   ├── ec2.cpython-310.pyc
    │   │   │   └── tags.cpython-310.pyc
    │   │   ├── aws.py
    │   │   ├── aws_credentials.py
    │   │   ├── aws_region.py
    │   │   ├── boto3.py
    │   │   ├── ec2.py
    │   │   └── tags.py
    │   ├── inventory
    │   │   ├── aws_ec2.py
    │   │   └── aws_rds.py
    │   ├── lookup
    │   │   ├── aws_account_attribute.py
    │   │   ├── aws_secret.py
    │   │   ├── aws_service_ip_ranges.py
    │   │   └── aws_ssm.py
    │   ├── module_utils
    │   │   ├── _version.py
    │   │   ├── acm.py
    │   │   ├── arn.py
    │   │   ├── batch.py
    │   │   ├── botocore.py
    │   │   ├── cloud.py
    │   │   ├── cloudfront_facts.py
    │   │   ├── core.py
    │   │   ├── direct_connect.py
    │   │   ├── ec2.py
    │   │   ├── elb_utils.py
    │   │   ├── elbv2.py
    │   │   ├── iam.py
    │   │   ├── modules.py
    │   │   ├── policy.py
    │   │   ├── rds.py
    │   │   ├── retries.py
    │   │   ├── route53.py
    │   │   ├── s3.py
    │   │   ├── tagging.py
    │   │   ├── tower.py
    │   │   ├── transformation.py
    │   │   ├── urls.py
    │   │   ├── version.py
    │   │   ├── waf.py
    │   │   └── waiters.py
    │   └── modules
    │       ├── autoscaling_group.py
    │       ├── autoscaling_group_info.py
    │       ├── aws_az_info.py
    │       ├── aws_caller_info.py
    │       ├── cloudformation.py
    │       ├── cloudformation_info.py
    │       ├── cloudtrail.py
    │       ├── cloudtrail_info.py
    │       ├── cloudwatch_metric_alarm.py
    │       ├── cloudwatch_metric_alarm_info.py
    │       ├── cloudwatchevent_rule.py
    │       ├── cloudwatchlogs_log_group.py
    │       ├── cloudwatchlogs_log_group_info.py
    │       ├── cloudwatchlogs_log_group_metric_filter.py
    │       ├── ec2_ami.py
    │       ├── ec2_ami_info.py
    │       ├── ec2_eip.py
    │       ├── ec2_eip_info.py
    │       ├── ec2_eni.py
    │       ├── ec2_eni_info.py
    │       ├── ec2_instance.py
    │       ├── ec2_instance_info.py
    │       ├── ec2_key.py
    │       ├── ec2_metadata_facts.py
    │       ├── ec2_security_group.py
    │       ├── ec2_security_group_info.py
    │       ├── ec2_snapshot.py
    │       ├── ec2_snapshot_info.py
    │       ├── ec2_spot_instance.py
    │       ├── ec2_spot_instance_info.py
    │       ├── ec2_tag.py
    │       ├── ec2_tag_info.py
    │       ├── ec2_vol.py
    │       ├── ec2_vol_info.py
    │       ├── ec2_vpc_dhcp_option.py
    │       ├── ec2_vpc_dhcp_option_info.py
    │       ├── ec2_vpc_endpoint.py
    │       ├── ec2_vpc_endpoint_info.py
    │       ├── ec2_vpc_endpoint_service_info.py
    │       ├── ec2_vpc_igw.py
    │       ├── ec2_vpc_igw_info.py
    │       ├── ec2_vpc_nat_gateway.py
    │       ├── ec2_vpc_nat_gateway_info.py
    │       ├── ec2_vpc_net.py
    │       ├── ec2_vpc_net_info.py
    │       ├── ec2_vpc_route_table.py
    │       ├── ec2_vpc_route_table_info.py
    │       ├── ec2_vpc_subnet.py
    │       ├── ec2_vpc_subnet_info.py
    │       ├── elb_application_lb.py
    │       ├── elb_application_lb_info.py
    │       ├── elb_classic_lb.py
    │       ├── iam_policy.py
    │       ├── iam_policy_info.py
    │       ├── iam_user.py
    │       ├── iam_user_info.py
    │       ├── kms_key.py
    │       ├── kms_key_info.py
    │       ├── lambda.py
    │       ├── lambda_alias.py
    │       ├── lambda_event.py
    │       ├── lambda_execute.py
    │       ├── lambda_info.py
    │       ├── lambda_policy.py
    │       ├── rds_cluster.py
    │       ├── rds_cluster_info.py
    │       ├── rds_cluster_snapshot.py
    │       ├── rds_instance.py
    │       ├── rds_instance_info.py
    │       ├── rds_instance_snapshot.py
    │       ├── rds_option_group.py
    │       ├── rds_option_group_info.py
    │       ├── rds_param_group.py
    │       ├── rds_snapshot_info.py
    │       ├── rds_subnet_group.py
    │       ├── route53.py
    │       ├── route53_health_check.py
    │       ├── route53_info.py
    │       ├── route53_zone.py
    │       ├── s3_bucket.py
    │       ├── s3_object.py
    │       └── s3_object_info.py
    ├── requirements.txt
    ├── test-requirements.txt
    ├── tests
    │   ├── config.yml
    │   ├── integration
    │   │   ├── constraints.txt
    │   │   ├── inventory
    │   │   ├── requirements.txt
    │   │   └── targets
    │   │       ├── autoscaling_group
    │   │       │   ├── aliases
    │   │       │   ├── inventory
    │   │       │   ├── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── roles
    │   │       │   │   └── ec2_asg
    │   │       │   │       ├── defaults
    │   │       │   │       │   └── main.yml
    │   │       │   │       └── tasks
    │   │       │   │           ├── create_update_delete.yml
    │   │       │   │           ├── env_cleanup.yml
    │   │       │   │           ├── env_setup.yml
    │   │       │   │           ├── instance_detach.yml
    │   │       │   │           ├── main.yml
    │   │       │   │           └── tag_operations.yml
    │   │       │   └── runme.sh
    │   │       ├── aws_az_info
    │   │       │   ├── aliases
    │   │       │   ├── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── aws_caller_info
    │   │       │   ├── aliases
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yaml
    │   │       ├── callback_aws_resource_actions
    │   │       │   ├── aliases
    │   │       │   ├── inventory
    │   │       │   ├── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── runme.sh
    │   │       ├── cloudformation
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── files
    │   │       │   │   ├── cf_template.json
    │   │       │   │   └── update_policy.json
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── cloudtrail
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── runme.sh
    │   │       │   ├── tasks
    │   │       │   │   ├── main.yml
    │   │       │   │   └── tagging.yml
    │   │       │   └── templates
    │   │       │       ├── cloudtrail-no-kms-assume-policy.j2
    │   │       │       ├── cloudtrail-no-kms-policy.j2
    │   │       │       ├── cloudwatch-assume-policy.j2
    │   │       │       ├── cloudwatch-policy.j2
    │   │       │       ├── kms-policy.j2
    │   │       │       ├── s3-policy.j2
    │   │       │       └── sns-policy.j2
    │   │       ├── cloudwatch_metric_alarm
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       ├── env_cleanup.yml
    │   │       │       ├── env_setup.yml
    │   │       │       └── main.yml
    │   │       ├── cloudwatchevent_rule
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── cloudwatchlogs
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       ├── cloudwatchlogs_tests.yml
    │   │       │       ├── create-delete-tags.yml
    │   │       │       └── main.yml
    │   │       ├── ec2_ami
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── tasks
    │   │       │   │   └── main.yml
    │   │       │   └── vars
    │   │       │       └── main.yml
    │   │       ├── ec2_eip
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_eni
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       ├── main.yaml
    │   │       │       ├── test_attachment.yaml
    │   │       │       ├── test_create_attached_multiple.yml
    │   │       │       ├── test_deletion.yaml
    │   │       │       ├── test_eni_basic_creation.yaml
    │   │       │       ├── test_ipaddress_assign.yaml
    │   │       │       ├── test_modifying_delete_on_termination.yaml
    │   │       │       ├── test_modifying_source_dest_check.yaml
    │   │       │       └── test_modifying_tags.yaml
    │   │       ├── ec2_instance_block_devices
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_checkmode_tests
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_cpu_options
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_default_vpc_tests
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_ebs_optimized
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_external_resource_attach
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_hibernation_options
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_iam_instance_role
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── files
    │   │       │   │   └── assume-role-policy.json
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_instance_minimal
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_instance_multiple
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_instance_no_wait
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_metadata_options
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_security_group
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_state_config_updates
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_tags_and_vpc_settings
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_termination_protection
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_instance_uptime
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_key
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_metadata_facts
    │   │       │   ├── aliases
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── playbooks
    │   │       │   │   ├── setup.yml
    │   │       │   │   ├── teardown.yml
    │   │       │   │   └── test_metadata.yml
    │   │       │   ├── runme.sh
    │   │       │   └── templates
    │   │       │       └── inventory.j2
    │   │       ├── ec2_security_group
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       ├── data_validation.yml
    │   │       │       ├── diff_mode.yml
    │   │       │       ├── egress_tests.yml
    │   │       │       ├── group_info.yml
    │   │       │       ├── icmp_verbs.yml
    │   │       │       ├── ipv6_default_tests.yml
    │   │       │       ├── main.yml
    │   │       │       ├── multi_account.yml
    │   │       │       ├── multi_nested_target.yml
    │   │       │       ├── numeric_protos.yml
    │   │       │       └── rule_group_create.yml
    │   │       ├── ec2_snapshot
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_spot_instance
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yaml
    │   │       ├── ec2_tag
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── tasks
    │   │       │   │   └── main.yml
    │   │       │   └── vars
    │   │       │       └── main.yml
    │   │       ├── ec2_vol
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_vpc_dhcp_option
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_vpc_endpoint
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_vpc_endpoint_service_info
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_vpc_igw
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_vpc_nat_gateway
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_vpc_net
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_vpc_route_table
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── ec2_vpc_subnet
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── elb_application_lb
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── elb_classic_lb
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── tasks
    │   │       │   │   ├── basic_internal.yml
    │   │       │   │   ├── basic_public.yml
    │   │       │   │   ├── cleanup_instances.yml
    │   │       │   │   ├── cleanup_s3.yml
    │   │       │   │   ├── cleanup_vpc.yml
    │   │       │   │   ├── complex_changes.yml
    │   │       │   │   ├── describe_region.yml
    │   │       │   │   ├── https_listeners.yml
    │   │       │   │   ├── main.yml
    │   │       │   │   ├── missing_params.yml
    │   │       │   │   ├── schema_change.yml
    │   │       │   │   ├── setup_instances.yml
    │   │       │   │   ├── setup_s3.yml
    │   │       │   │   ├── setup_vpc.yml
    │   │       │   │   ├── simple_changes.yml
    │   │       │   │   ├── simple_cross_az.yml
    │   │       │   │   ├── simple_draining_timeout.yml
    │   │       │   │   ├── simple_healthcheck.yml
    │   │       │   │   ├── simple_idle_timeout.yml
    │   │       │   │   ├── simple_instances.yml
    │   │       │   │   ├── simple_listeners.yml
    │   │       │   │   ├── simple_logging.yml
    │   │       │   │   ├── simple_proxy_policy.yml
    │   │       │   │   ├── simple_securitygroups.yml
    │   │       │   │   ├── simple_stickiness.yml
    │   │       │   │   └── simple_tags.yml
    │   │       │   ├── templates
    │   │       │   │   └── s3_policy.j2
    │   │       │   └── vars
    │   │       │       └── main.yml
    │   │       ├── iam_policy
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── files
    │   │       │   │   ├── no_access.json
    │   │       │   │   ├── no_access_with_id.json
    │   │       │   │   ├── no_access_with_second_id.json
    │   │       │   │   └── no_trust.json
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       ├── main.yml
    │   │       │       └── object.yml
    │   │       ├── iam_user
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── inventory_aws_ec2
    │   │       │   ├── aliases
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── playbooks
    │   │       │   │   ├── create_environment_script.yml
    │   │       │   │   ├── create_inventory_config.yml
    │   │       │   │   ├── empty_inventory_config.yml
    │   │       │   │   ├── populate_cache.yml
    │   │       │   │   ├── setup.yml
    │   │       │   │   ├── tear_down.yml
    │   │       │   │   ├── test_invalid_aws_ec2_inventory_config.yml
    │   │       │   │   ├── test_inventory_cache.yml
    │   │       │   │   ├── test_populating_inventory.yml
    │   │       │   │   ├── test_populating_inventory_with_concatenation.yml
    │   │       │   │   ├── test_populating_inventory_with_constructed.yml
    │   │       │   │   ├── test_populating_inventory_with_hostnames_using_tags.yml
    │   │       │   │   ├── test_populating_inventory_with_hostnames_using_tags_classic.yml
    │   │       │   │   ├── test_populating_inventory_with_hostvars_prefix_suffix.yml
    │   │       │   │   ├── test_populating_inventory_with_include_or_exclude_filters.yml
    │   │       │   │   ├── test_populating_inventory_with_literal_string.yml
    │   │       │   │   ├── test_populating_inventory_with_use_contrib_script_keys.yml
    │   │       │   │   └── test_refresh_inventory.yml
    │   │       │   ├── runme.sh
    │   │       │   ├── templates
    │   │       │   │   ├── inventory.yml.j2
    │   │       │   │   ├── inventory_with_cache.yml.j2
    │   │       │   │   ├── inventory_with_concatenation.yml.j2
    │   │       │   │   ├── inventory_with_constructed.yml.j2
    │   │       │   │   ├── inventory_with_hostnames_using_tags.yml.j2
    │   │       │   │   ├── inventory_with_hostnames_using_tags_classic.yml.j2
    │   │       │   │   ├── inventory_with_hostvars_prefix_suffix.yml.j2
    │   │       │   │   ├── inventory_with_include_or_exclude_filters.yml.j2
    │   │       │   │   ├── inventory_with_literal_string.yml.j2
    │   │       │   │   ├── inventory_with_template.yml.j2
    │   │       │   │   └── inventory_with_use_contrib_script_keys.yml.j2
    │   │       │   └── test.aws_ec2.yml
    │   │       ├── inventory_aws_rds
    │   │       │   ├── aliases
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── playbooks
    │   │       │   │   ├── create_inventory_config.yml
    │   │       │   │   ├── empty_inventory_config.yml
    │   │       │   │   ├── populate_cache.yml
    │   │       │   │   ├── test_invalid_aws_rds_inventory_config.yml
    │   │       │   │   ├── test_inventory_cache.yml
    │   │       │   │   ├── test_inventory_with_hostvars_prefix_suffix.yml
    │   │       │   │   ├── test_populating_inventory.yml
    │   │       │   │   ├── test_populating_inventory_with_constructed.yml
    │   │       │   │   └── test_refresh_inventory.yml
    │   │       │   ├── runme.sh
    │   │       │   ├── templates
    │   │       │   │   ├── inventory.j2
    │   │       │   │   ├── inventory_with_cache.j2
    │   │       │   │   ├── inventory_with_constructed.j2
    │   │       │   │   └── inventory_with_hostvars_prefix_suffix.j2
    │   │       │   └── test.aws_rds.yml
    │   │       ├── kms_key
    │   │       │   ├── aliases
    │   │       │   ├── inventory
    │   │       │   ├── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── roles
    │   │       │   │   └── aws_kms
    │   │       │   │       ├── defaults
    │   │       │   │       │   └── main.yml
    │   │       │   │       ├── tasks
    │   │       │   │       │   ├── main.yml
    │   │       │   │       │   ├── test_grants.yml
    │   │       │   │       │   ├── test_modify.yml
    │   │       │   │       │   ├── test_states.yml
    │   │       │   │       │   └── test_tagging.yml
    │   │       │   │       └── templates
    │   │       │   │           ├── console-policy-no-key-rotation.j2
    │   │       │   │           └── console-policy.j2
    │   │       │   └── runme.sh
    │   │       ├── lambda
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── files
    │   │       │   │   ├── mini_lambda.py
    │   │       │   │   └── minimal_trust_policy.json
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       ├── main.yml
    │   │       │       └── tagging.yml
    │   │       ├── lambda_alias
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── files
    │   │       │   │   ├── mini_lambda.py
    │   │       │   │   └── minimal_trust_policy.json
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── lambda_policy
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── files
    │   │       │   │   ├── mini_http_lambda.py
    │   │       │   │   └── minimal_trust_policy.json
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── tasks
    │   │       │   │   └── main.yml
    │   │       │   └── templates
    │   │       │       └── endpoint-test-swagger-api.yml.j2
    │   │       ├── legacy_missing_tests
    │   │       │   ├── README.md
    │   │       │   ├── aliases
    │   │       │   └── meta
    │   │       │       └── main.yml
    │   │       ├── lookup_aws_account_attribute
    │   │       │   ├── aliases
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yaml
    │   │       ├── lookup_aws_secret
    │   │       │   ├── aliases
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yaml
    │   │       ├── lookup_aws_service_ip_ranges
    │   │       │   ├── aliases
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yaml
    │   │       ├── lookup_aws_ssm
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── module_utils_botocore_recorder
    │   │       │   ├── aliases
    │   │       │   ├── main.yml
    │   │       │   ├── record.sh
    │   │       │   ├── recording.tar.gz
    │   │       │   └── runme.sh
    │   │       ├── module_utils_core
    │   │       │   ├── aliases
    │   │       │   ├── inventory
    │   │       │   ├── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── roles
    │   │       │   │   └── ansibleawsmodule.client
    │   │       │   │       ├── files
    │   │       │   │       │   ├── amazonroot.pem
    │   │       │   │       │   └── isrg-x1.pem
    │   │       │   │       ├── library
    │   │       │   │       │   └── example_module.py
    │   │       │   │       ├── meta
    │   │       │   │       │   └── main.yml
    │   │       │   │       └── tasks
    │   │       │   │           ├── ca_bundle.yml
    │   │       │   │           ├── credentials.yml
    │   │       │   │           ├── endpoints.yml
    │   │       │   │           ├── main.yml
    │   │       │   │           └── profiles.yml
    │   │       │   ├── runme.sh
    │   │       │   ├── setup.yml
    │   │       │   └── templates
    │   │       │       ├── boto_config.j2
    │   │       │       └── session_credentials.yml.j2
    │   │       ├── module_utils_waiter
    │   │       │   ├── aliases
    │   │       │   ├── inventory
    │   │       │   ├── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── roles
    │   │       │   │   └── get_waiter
    │   │       │   │       ├── library
    │   │       │   │       │   └── example_module.py
    │   │       │   │       ├── meta
    │   │       │   │       │   └── main.yml
    │   │       │   │       └── tasks
    │   │       │   │           └── main.yml
    │   │       │   └── runme.sh
    │   │       ├── rds_cluster
    │   │       │   ├── aliases
    │   │       │   ├── inventory
    │   │       │   ├── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── roles
    │   │       │   │   └── rds_cluster
    │   │       │   │       ├── defaults
    │   │       │   │       │   └── main.yml
    │   │       │   │       ├── meta
    │   │       │   │       │   └── main.yml
    │   │       │   │       ├── tasks
    │   │       │   │       │   ├── main.yml
    │   │       │   │       │   ├── test_create.yml
    │   │       │   │       │   ├── test_create_sgs.yml
    │   │       │   │       │   ├── test_modify.yml
    │   │       │   │       │   ├── test_promote.yml
    │   │       │   │       │   ├── test_restore.yml
    │   │       │   │       │   └── test_tag.yml
    │   │       │   │       └── vars
    │   │       │   │           └── main.yml
    │   │       │   └── runme.sh
    │   │       ├── rds_cluster_snapshot
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── tasks
    │   │       │   │   └── main.yml
    │   │       │   └── vars
    │   │       │       └── main.yml
    │   │       ├── rds_instance_aurora
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── rds_instance_complex
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── files
    │   │       │   │   ├── enhanced_monitoring_assume_policy.json
    │   │       │   │   ├── s3_integration_policy.json
    │   │       │   │   └── s3_integration_trust_policy.json
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── rds_instance_modify
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── rds_instance_processor
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── rds_instance_replica
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── rds_instance_restore
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── rds_instance_sgroups
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── rds_instance_snapshot
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── tasks
    │   │       │   │   └── main.yml
    │   │       │   └── vars
    │   │       │       └── main.yml
    │   │       ├── rds_instance_snapshot_mgmt
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── rds_instance_states
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── rds_instance_tagging
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── rds_instance_upgrade
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── rds_option_group
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── rds_param_group
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── rds_subnet_group
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       ├── main.yml
    │   │       │       ├── params.yml
    │   │       │       └── tests.yml
    │   │       ├── route53
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── tasks
    │   │       │   │   └── main.yml
    │   │       │   └── vars
    │   │       │       └── main.yml
    │   │       ├── route53_health_check
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       ├── create_multiple_health_checks.yml
    │   │       │       ├── main.yml
    │   │       │       └── update_delete_by_id.yml
    │   │       ├── route53_zone
    │   │       │   ├── aliases
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── s3_bucket
    │   │       │   ├── aliases
    │   │       │   ├── inventory
    │   │       │   ├── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── roles
    │   │       │   │   └── s3_bucket
    │   │       │   │       ├── defaults
    │   │       │   │       │   └── main.yml
    │   │       │   │       ├── meta
    │   │       │   │       │   └── main.yml
    │   │       │   │       ├── tasks
    │   │       │   │       │   ├── acl.yml
    │   │       │   │       │   ├── complex.yml
    │   │       │   │       │   ├── dotted.yml
    │   │       │   │       │   ├── encryption_bucket_key.yml
    │   │       │   │       │   ├── encryption_kms.yml
    │   │       │   │       │   ├── encryption_sse.yml
    │   │       │   │       │   ├── main.yml
    │   │       │   │       │   ├── missing.yml
    │   │       │   │       │   ├── object_lock.yml
    │   │       │   │       │   ├── ownership_controls.yml
    │   │       │   │       │   ├── public_access.yml
    │   │       │   │       │   ├── simple.yml
    │   │       │   │       │   └── tags.yml
    │   │       │   │       └── templates
    │   │       │   │           ├── policy-updated.json
    │   │       │   │           └── policy.json
    │   │       │   └── runme.sh
    │   │       ├── s3_object
    │   │       │   ├── aliases
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── files
    │   │       │   │   ├── hello.txt
    │   │       │   │   └── test.png
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   ├── tasks
    │   │       │   │   ├── copy_object.yml
    │   │       │   │   ├── copy_object_acl_disabled_bucket.yml
    │   │       │   │   ├── delete_bucket.yml
    │   │       │   │   └── main.yml
    │   │       │   └── templates
    │   │       │       ├── policy.json.j2
    │   │       │       └── put-template.txt.j2
    │   │       ├── setup_botocore_pip
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── handlers
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       ├── cleanup.yml
    │   │       │       └── main.yml
    │   │       ├── setup_ec2_facts
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       └── main.yml
    │   │       ├── setup_ec2_instance_env
    │   │       │   ├── defaults
    │   │       │   │   └── main.yml
    │   │       │   ├── handlers
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       ├── cleanup.yml
    │   │       │       └── main.yml
    │   │       ├── setup_remote_tmp_dir
    │   │       │   ├── handlers
    │   │       │   │   └── main.yml
    │   │       │   ├── meta
    │   │       │   │   └── main.yml
    │   │       │   └── tasks
    │   │       │       ├── default-cleanup.yml
    │   │       │       ├── default.yml
    │   │       │       ├── main.yml
    │   │       │       ├── windows-cleanup.yml
    │   │       │       └── windows.yml
    │   │       └── setup_sshkey
    │   │           ├── files
    │   │           │   └── ec2-fingerprint.py
    │   │           ├── meta
    │   │           │   └── main.yml
    │   │           └── tasks
    │   │               └── main.yml
    │   ├── requirements.yml
    │   ├── sanity
    │   │   ├── ignore-2.10.txt
    │   │   ├── ignore-2.11.txt
    │   │   ├── ignore-2.12.txt
    │   │   ├── ignore-2.13.txt
    │   │   ├── ignore-2.14.txt
    │   │   ├── ignore-2.15.txt
    │   │   └── ignore-2.9.txt
    │   └── unit
    │       ├── compat
    │       │   ├── __init__.py
    │       │   ├── builtins.py
    │       │   ├── mock.py
    │       │   └── unittest.py
    │       ├── constraints.txt
    │       ├── mock
    │       │   ├── loader.py
    │       │   ├── path.py
    │       │   ├── procenv.py
    │       │   ├── vault_helper.py
    │       │   └── yaml_helper.py
    │       ├── module_utils
    │       │   ├── arn
    │       │   │   ├── test_is_outpost_arn.py
    │       │   │   └── test_parse_aws_arn.py
    │       │   ├── botocore
    │       │   │   ├── test_is_boto3_error_code.py
    │       │   │   ├── test_is_boto3_error_message.py
    │       │   │   └── test_normalize_boto3_result.py
    │       │   ├── cloud
    │       │   │   ├── test_backoff_iterator.py
    │       │   │   ├── test_cloud_retry.py
    │       │   │   ├── test_decorator_generation.py
    │       │   │   ├── test_retries_found.py
    │       │   │   └── test_retry_func.py
    │       │   ├── conftest.py
    │       │   ├── elbv2
    │       │   │   └── test_prune.py
    │       │   ├── modules
    │       │   │   └── ansible_aws_module
    │       │   │       ├── test_fail_json_aws.py
    │       │   │       ├── test_minimal_versions.py
    │       │   │       └── test_require_at_least.py
    │       │   ├── policy
    │       │   │   └── test_compare_policies.py
    │       │   ├── retries
    │       │   │   └── test_awsretry.py
    │       │   ├── test_elbv2.py
    │       │   ├── test_iam.py
    │       │   ├── test_rds.py
    │       │   ├── test_s3.py
    │       │   ├── test_tagging.py
    │       │   ├── test_tower.py
    │       │   └── transformation
    │       │       ├── test_ansible_dict_to_boto3_filter_list.py
    │       │       ├── test_map_complex_type.py
    │       │       └── test_scrub_none_parameters.py
    │       ├── plugins
    │       │   ├── inventory
    │       │   │   └── test_aws_ec2.py
    │       │   └── modules
    │       │       ├── conftest.py
    │       │       ├── ec2_instance
    │       │       │   ├── test_build_run_instance_spec.py
    │       │       │   └── test_determine_iam_role.py
    │       │       ├── fixtures
    │       │       │   ├── certs
    │       │       │   │   ├── a.pem
    │       │       │   │   ├── b.pem
    │       │       │   │   ├── chain-1.0.cert
    │       │       │   │   ├── chain-1.1.cert
    │       │       │   │   ├── chain-1.2.cert
    │       │       │   │   ├── chain-1.3.cert
    │       │       │   │   ├── chain-1.4.cert
    │       │       │   │   ├── chain-4.cert
    │       │       │   │   ├── simple-chain-a.cert
    │       │       │   │   └── simple-chain-b.cert
    │       │       │   └── thezip.zip
    │       │       ├── placebo_recordings
    │       │       │   └── cloudformation
    │       │       │       ├── basic_s3_stack
    │       │       │       │   ├── cloudformation.CreateStack_1.json
    │       │       │       │   ├── cloudformation.DeleteStack_1.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_1.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_2.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_3.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_4.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_5.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_6.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_7.json
    │       │       │       │   ├── cloudformation.DescribeStacks_1.json
    │       │       │       │   ├── cloudformation.DescribeStacks_2.json
    │       │       │       │   ├── cloudformation.DescribeStacks_3.json
    │       │       │       │   ├── cloudformation.DescribeStacks_4.json
    │       │       │       │   ├── cloudformation.DescribeStacks_5.json
    │       │       │       │   ├── cloudformation.DescribeStacks_6.json
    │       │       │       │   └── cloudformation.DescribeStacks_7.json
    │       │       │       ├── client_request_token_s3_stack
    │       │       │       │   ├── cloudformation.CreateStack_1.json
    │       │       │       │   ├── cloudformation.DeleteStack_1.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_1.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_2.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_3.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_4.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_5.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_6.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_7.json
    │       │       │       │   ├── cloudformation.DescribeStacks_1.json
    │       │       │       │   ├── cloudformation.DescribeStacks_2.json
    │       │       │       │   ├── cloudformation.DescribeStacks_3.json
    │       │       │       │   ├── cloudformation.DescribeStacks_4.json
    │       │       │       │   ├── cloudformation.DescribeStacks_5.json
    │       │       │       │   ├── cloudformation.DescribeStacks_6.json
    │       │       │       │   └── cloudformation.DescribeStacks_7.json
    │       │       │       ├── delete_nonexistent_stack
    │       │       │       │   ├── cloudformation.DescribeStackEvents_1.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_2.json
    │       │       │       │   └── cloudformation.DescribeStacks_1.json
    │       │       │       ├── get_nonexistent_stack
    │       │       │       │   └── cloudformation.DescribeStacks_1.json
    │       │       │       ├── invalid_template_json
    │       │       │       │   └── cloudformation.CreateStack_1.json
    │       │       │       ├── on_create_failure_delete
    │       │       │       │   ├── cloudformation.CreateStack_1.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_1.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_2.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_3.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_4.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_5.json
    │       │       │       │   ├── cloudformation.DescribeStacks_1.json
    │       │       │       │   ├── cloudformation.DescribeStacks_2.json
    │       │       │       │   ├── cloudformation.DescribeStacks_3.json
    │       │       │       │   ├── cloudformation.DescribeStacks_4.json
    │       │       │       │   └── cloudformation.DescribeStacks_5.json
    │       │       │       ├── on_create_failure_do_nothing
    │       │       │       │   ├── cloudformation.CreateStack_1.json
    │       │       │       │   ├── cloudformation.DeleteStack_1.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_1.json
    │       │       │       │   ├── cloudformation.DescribeStackEvents_2.json
    │       │       │       │   ├── cloudformation.DescribeStacks_1.json
    │       │       │       │   └── cloudformation.DescribeStacks_2.json
    │       │       │       └── on_create_failure_rollback
    │       │       │           ├── cloudformation.CreateStack_1.json
    │       │       │           ├── cloudformation.DeleteStack_1.json
    │       │       │           ├── cloudformation.DescribeStackEvents_1.json
    │       │       │           ├── cloudformation.DescribeStackEvents_2.json
    │       │       │           ├── cloudformation.DescribeStackEvents_3.json
    │       │       │           ├── cloudformation.DescribeStacks_1.json
    │       │       │           ├── cloudformation.DescribeStacks_2.json
    │       │       │           └── cloudformation.DescribeStacks_3.json
    │       │       ├── test_cloudformation.py
    │       │       ├── test_ec2_key.py
    │       │       ├── test_ec2_security_group.py
    │       │       ├── test_ec2_vpc_dhcp_option.py
    │       │       ├── test_s3_object.py
    │       │       └── utils.py
    │       ├── requirements.txt
    │       └── utils
    │           └── amazon_placebo_fixtures.py
    └── tox.ini
